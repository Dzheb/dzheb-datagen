function generateName() {
  /***
   * function generateName()
   *
   * return random name masculine and femimine
   *
   */
  const firstNamesMusc = [
    'Иван',
    'Сергей',
    'Дмитрий',
    'Вадим',
    'Олег',
    'Вячеслав',
    'Александр',
    'Алексей',
    'Владимир',
    'Григорий',
  ];
  const firstNamesFem = [
    'Анна',
    'Анастасия',
    'Ирина',
    'Ольга',
    'Татьяна',
    'Евгения',
    'Марина',
    'Нина',
    'Алла',
    'Инна',
  ];
  const lastNames = [
    'Иванов',
    'Сергеев',
    'Дмитриев',
    'Медведев',
    'Волков',
    'Зайцев',
    'Воробъёв',
    'Сизов',
    'Ухов',
    'Царёв',
  ];
  min = 0;
  max = 9;
  randName = getRandomInt(min, max);
  let sex = randName % 2 == 0;
  randLastname = getRandomInt(min, max);
  return sex
    ? firstNamesMusc[randName] + ' ' + lastNames[randLastname]
    : firstNamesFem[randName] + ' ' + lastNames[randLastname] + 'а';
}
/***
 * function getRandomInt()
 *
 * return random int from min to max
 *
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
/***
 * function genRandomDate()
 *
 * return random date starting from Unix time
 * start to now
 *
 */
function genRandomDate() {
  // Convert to milliseconds and
  // then create a new Date objects from
  // unixTimestampBegin to unixTimestampEnd
  let unixTimestampBegin = 10637282 * 1000;
  let unixTimestampEnd = 1700343901 * 1000;
  let unixTimestamp = getRandomInt(unixTimestampBegin, unixTimestampEnd);
  let dateObj = new Date(unixTimestamp);
  let utcString = dateObj.toUTCString();
  return utcString.slice(5, 16);
}
module.exports = { generateName, getRandomInt, genRandomDate };
