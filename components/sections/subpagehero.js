import Container from "@components/container";

function SubpageHero({ children }) {
  return (
    <div className="text-center bg-offgreen-light py-14">
      <Container>{children}</Container>
    </div>
  );
}

const Title = ({ children }) => (
  <h1 className="text-2xl font-bold lg:text-4xl">{children}</h1>
);
const SubTitle = ({ children }) => (
  <p className="mt-2 text-gray-600">{children}</p>
);

SubpageHero.Title = Title;
SubpageHero.SubTitle = SubTitle;
export default SubpageHero;
