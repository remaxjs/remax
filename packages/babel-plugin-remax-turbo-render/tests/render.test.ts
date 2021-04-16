import * as babel from '@babel/core';
import Store from '@remax/build-store';
import preprocess from '../src/preprocess';
import extractTemplate from '../src/extractTemplate';

function transform(code: string, filename = __filename) {
  const options = {
    isHostComponentPackage: (pkg: string) => pkg === 'components',
  };
  return new Promise((resolve, reject) => {
    babel.transform(
      code,
      {
        plugins: ['@babel/plugin-syntax-jsx', preprocess(options), extractTemplate(options)],
        filename,
      },
      (err, result) => {
        if (result) {
          return resolve(result.code);
        }
        reject(err);
      }
    );
  });
}

describe('extract template', () => {
  beforeEach(() => {
    Store.registeredHostComponents.set('view', {
      props: ['onTap'],
    });
  });

  afterEach(() => {
    Store.reset();
  });

  it('host component root node', async () => {
    await transform(`
    import { View } from 'components';

    const className = 'foo';

    <View id="123" className={className}>foo</View>
    `);

    expect(Store.extractedTemplates.size).toBe(1);
    expect(Store.extractedTemplates.values().next().value.template).toMatchInlineSnapshot(`
      "<view id=\\"123\\"
        className=\\"{{node.props['className']}}\\">{{'foo'}}</view>
      "
    `);
  });

  it('skips element with spread attribute', async () => {
    await transform(`
    import { View } from 'components';

    const props =  {
      className: 'foo',
    };

    const a = <View {...props}>a</View>

    const b = (
      <View>
        <View {...props}>b</View>
      </View>
    )

    const c = (
      <View {...props}>
        <View>c</View>
      </View>
    );
    `);
    const templates = Store.extractedTemplates.values();
    expect(Store.extractedTemplates.size).toBe(2);
    expect(templates.next().value.template).toMatchInlineSnapshot(`
      "<view ><template is=\\"TPL_DEFAULT\\" data=\\"{{root: node.children[0]}}\\" />
      </view>
      "
    `);
    expect(templates.next().value.template).toMatchInlineSnapshot(`
      "<view >{{'c'}}</view>
      "
    `);
  });

  it('skips element with children attribute', async () => {
    await transform(`
    import { View } from 'components';

    const a = <View children="a" />

    const b = (
      <View>
        <View children="b" />
      </View>
    )
    `);

    expect(Store.extractedTemplates.size).toBe(1);
    expect(Store.extractedTemplates.values().next().value.template).toMatchInlineSnapshot(`
      "<view ><template is=\\"TPL_DEFAULT\\" data=\\"{{root: node.children[0]}}\\" />
      </view>
      "
    `);
  });

  it('composition component root node', async () => {
    await transform(`
    import Container from 'ui';
    import { View } from 'components';

    <Container>
      <View>foo</View>
    </Container>
    `);

    expect(Store.extractedTemplates.size).toBe(1);
    expect(Store.extractedTemplates.values().next().value.template).toMatchInlineSnapshot(`
      "<view >{{'foo'}}</view>
      "
    `);
  });

  it('extracts literal expression', async () => {
    await transform(`
    import { View } from 'components';

    <View>{'foo'}</View>
    `);

    expect(Store.extractedTemplates.size).toBe(1);
    expect(Store.extractedTemplates.values().next().value.template).toMatchInlineSnapshot(`
      "<view >{{'foo'}}</view>
      "
    `);
  });

  it('extracts text', async () => {
    await transform(`
    import { Text } from 'components';

    <Text>
      text1
      text2
    </Text>
    `);

    expect(Store.extractedTemplates.size).toBe(1);
    expect(Store.extractedTemplates.values().next().value.template).toMatchInlineSnapshot(`
      "<text >{{'text1 text2 '}}</text>
      "
    `);
  });

  it('extracts import namespace', async () => {
    await transform(`
    import * as Com from 'components';

    <Com.View>foo</Com.View>
    `);

    expect(Store.extractedTemplates.size).toBe(1);
    expect(Store.extractedTemplates.values().next().value.template).toMatchInlineSnapshot(`
      "<view >{{'foo'}}</view>
      "
    `);
  });

  it('extracts named import', async () => {
    await transform(`
    import { View as MyView } from 'components';

    <MyView>foo</MyView>
    `);

    expect(Store.extractedTemplates.size).toBe(1);
    expect(Store.extractedTemplates.values().next().value.template).toMatchInlineSnapshot(`
      "<view >{{'foo'}}</view>
      "
    `);
  });

  it('removes empty lines', async () => {
    await transform(`
    import { Text } from 'components';

    <Text>
      {foo}
    </Text>
    `);

    expect(Store.extractedTemplates.size).toBe(1);
    expect(Store.extractedTemplates.values().next().value.template).toMatchInlineSnapshot(`
      "<text ><block a:if=\\"{{node.children[0].children}}\\">
        <block a:for=\\"{{node.children[0].children || []}}\\" key=\\"{{item.id}}\\">
          <template a:if=\\"{{item.props._tid}}\\" is=\\"{{'TPL_' + item.props._tid}}\\" data=\\"{{ node: item }}\\" />
          <template a:else is=\\"{{ 'TPL_' + item.type }}\\" data=\\"{{ node: item }}\\" />
        </block>
      </block>
      <template a:elif=\\"{{node.children[0].props._tid}}\\" is=\\"{{'TPL_' + node.children[0].props._tid}}\\" data=\\"{{ node: node.children[0] }}\\" />
      <template a:else is=\\"{{ 'TPL_' + node.children[0].type }}\\" data=\\"{{ node: node.children[0] }}\\" />
      </text>
      "
    `);
  });

  it('keeps whitespace which inline with element', async () => {
    await transform(`
    import { Text } from 'components';

    <Text> {foo} </Text>
    `);

    expect(Store.extractedTemplates.size).toBe(1);
    expect(Store.extractedTemplates.values().next().value.template).toMatchInlineSnapshot(`
      "<text >{{' '}}
      <block a:if=\\"{{node.children[1].children}}\\">
        <block a:for=\\"{{node.children[1].children || []}}\\" key=\\"{{item.id}}\\">
          <template a:if=\\"{{item.props._tid}}\\" is=\\"{{'TPL_' + item.props._tid}}\\" data=\\"{{ node: item }}\\" />
          <template a:else is=\\"{{ 'TPL_' + item.type }}\\" data=\\"{{ node: item }}\\" />
        </block>
      </block>
      <template a:elif=\\"{{node.children[1].props._tid}}\\" is=\\"{{'TPL_' + node.children[1].props._tid}}\\" data=\\"{{ node: node.children[1] }}\\" />
      <template a:else is=\\"{{ 'TPL_' + node.children[1].type }}\\" data=\\"{{ node: node.children[1] }}\\" />

      {{' '}}</text>
      "
    `);
  });

  it('skips block root node', async () => {
    await transform(`
    import { View } from 'components';

    <block>
      <View>foo</View>
    </block>
    `);

    expect(Store.extractedTemplates.size).toBe(0);
  });

  it('skips elements', async () => {
    await transform(`
    import { PickerView, PickerViewColumn } from 'components';

    const node = (
      <PickerViewColumn>
        {[1].map(i => (
          <View>{i}</View>
        ))}
      </PickerViewColumn>
    );

    <PickerView>{node}</PickerView>;
    `);

    expect(Store.extractedTemplates.size).toBe(0);
  });

  it('extracts entry node', async () => {
    await transform(`
    import { View } from 'components';

    <View entry>foo</View>
    `);

    expect(Store.extractedTemplates.size).toBe(1);
    const template = Store.extractedTemplates.values().next().value;
    expect(template.isEntry).toBe(true);
    expect(template.template).toMatchInlineSnapshot(`
      "<view >{{'foo'}}</view>
      "
    `);
  });

  it('skips non-host component', async () => {
    await transform(`
    import { View } from 'components';
    import { Text } from 'foo';

    <View>
    <Text>foo</Text>
    </View>
    `);

    expect(Store.extractedTemplates.size).toBe(1);
    expect(Store.extractedTemplates.values().next().value.template).toMatchInlineSnapshot(`
      "<view ><template is=\\"TPL_DEFAULT\\" data=\\"{{root: node.children[0]}}\\" />
      </view>
      "
    `);
  });

  it('skips slot element', async () => {
    await transform(`
    import { View, Text } from 'components';
    import { Badge } from 'ui';

    <Badge>
      <View slot="inner">
        <Text>foo</Text>
      </View>
    </Badge>
    `);

    expect(Store.extractedTemplates.size).toBe(1);
    expect(Store.extractedTemplates.values().next().value.template).toMatchInlineSnapshot(`
      "<text >{{'foo'}}</text>
      "
    `);
  });

  it('removes previous template on second round of running', async () => {
    const code = `
    import { View } from 'components';

    const className = 'foo';

    const a = <View className={className}>a</View>;
    const b = <View className={className}>b</View>;
    `;
    await transform(code);
    await transform(code);

    expect(Store.extractedTemplates.size).toBe(2);
    const templates = Store.extractedTemplates.values();
    expect(templates.next().value.template).toMatchInlineSnapshot(`
      "<view className=\\"{{node.props['className']}}\\">{{'a'}}</view>
      "
    `);
    expect(templates.next().value.template).toMatchInlineSnapshot(`
      "<view className=\\"{{node.props['className']}}\\">{{'b'}}</view>
      "
    `);
  });

  it('uses separated template id for each file', async () => {
    await transform(
      `
     import { View } from 'components';

     <View>b</View>;
    `,
      'a.js'
    );
    await transform(
      `
     import { View } from 'components';

     <View>b</View>;
    `,
      'b.js'
    );
    expect(Store.extractedTemplates.size).toBe(2);
    const templates = Store.extractedTemplates.values();
    const template1 = templates.next().value;
    const template2 = templates.next().value;
    expect(template1.id.endsWith('-1')).toBe(true);
    expect(template1.template).toMatchInlineSnapshot(`
      "<view >{{'b'}}</view>
      "
    `);
    expect(template2.id.endsWith('-1')).toBe(true);
    expect(template2.template).toMatchInlineSnapshot(`
      "<view >{{'b'}}</view>
      "
    `);
  });
});
