type GroupKey = string | number | symbol;

interface GroupFunction<T> {
  (item: T, index?: number): GroupKey;
}

const getPostsByGroupCondition = <T>(
  items: T[],
  groupFunction: GroupFunction<T>
) => {
  const result: Record<GroupKey, T[]> = {};
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const groupKey = groupFunction(item, i);
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
  }
  return result;
};

export default getPostsByGroupCondition;
