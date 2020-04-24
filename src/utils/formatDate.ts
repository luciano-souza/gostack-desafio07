const formatDate = (timestamp: Date): string => {
  // From timestamp to js date
  const date = new Date(timestamp);

  return new Intl.DateTimeFormat('pt-BR').format(date);
};

export default formatDate;
