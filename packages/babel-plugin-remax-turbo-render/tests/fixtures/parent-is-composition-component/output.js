import { Box, Text } from 'foo';
const a = <Text>foo</Text>;
const b = <Box>{a}</Box>;
const c = (
  <Box>
    <Text>bar</Text>
  </Box>
);
