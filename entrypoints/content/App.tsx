import HintsPanel from "@/components/HintsPanel/HintsPanel";

type Props = {
  problemId: string;
};

export default function App({ problemId }: Props) {
  return <HintsPanel problemId={problemId} />;
}
