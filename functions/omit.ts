function omit(obj: Record<string, any>, ...props: string[]) {
  const result = { ...obj };
  props.forEach(function(prop) {
    delete result[prop];
  });
  return result;
}

export default omit