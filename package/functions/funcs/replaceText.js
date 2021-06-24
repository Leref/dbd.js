const replaceText = async (d) => {
  const code = d.command.code;

  const inside = d.unpack();
  const err = d.inside(inside);

  if (err) return d.error(err);

  let [text, match, replace, howMany = "-1"] = inside.splits;

  if (replace === undefined)
    return d.error(`❌ Not enough fields in \`$replaceText${inside}\``);

  howMany = Number(howMany);

  if (howMany < 0) howMany = -1;

  return {
    code: code.replaceLast(
      `$replaceText${inside}`,
      text
        .addBrackets()
        .split(match.addBrackets(), howMany)
        .join(replace.addBrackets())
        .removeBrackets()
    ),
  };
};

module.exports = replaceText;
