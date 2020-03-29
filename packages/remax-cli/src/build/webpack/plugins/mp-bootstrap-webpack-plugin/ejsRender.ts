import ejs from 'ejs';

export default async function ejsRender(file: string, data: object) {
  const code = await ejs.renderFile(file, data, {
    rmWhitespace: process.env.NODE_ENV === 'production',
  });

  return code;
}
