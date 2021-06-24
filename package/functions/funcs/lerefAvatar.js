module.exports = async (d) => {
  const Leref = await d.client.users.fetch("608358453580136499");
  return {
    code: d.command.code.replaceLast(
      "$lerefAvatar",
      Leref.displayAvatarURL({ dynamic: true, size: 4096 })
    ),
  };

  //Lets all simp for Leref Uwu
};
