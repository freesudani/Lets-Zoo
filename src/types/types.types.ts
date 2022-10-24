export type BlackboxProps = {
  title: string;
  btntitle: string;
  animation: 1 | 2;
};

export type TestimonialProps = {
  source: string;
  parag: string;
};

export type FAQBoxProps = {
  id: number;
  question: string;
  answer: string;
  isActive: boolean;
  setActiveIndex:
    | React.Dispatch<React.SetStateAction<number | null>>
    | undefined;
  index: number;
};

export type AnimalProps = {
  id: number;
  title: string;
  image: string;
  details: string;
};
