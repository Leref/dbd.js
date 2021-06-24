//most complex code here.

module.exports = (d) => {
  return {
    code: d.command.code.replaceLast(
      "$botPing",
      (d.ping = Math.floor(Date.now() - d.message.createdTimestamp))
    ),
  };
};
