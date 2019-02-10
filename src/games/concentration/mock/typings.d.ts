declare module "*.json" {
  const value: {
    cards: {
      id: number;
      svg: string;
    }[];
  };
  export default value;
}
