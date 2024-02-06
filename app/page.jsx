import Header from "./components/Header";
import TopSection from "./components/TopSection";
import Footer from "./components/Footer";
import MidSection from "./components/MidSection";
import CodeSection from "./components/CodeSection";
import BottomSection from "./components/BottomSection";
import Navigation, { MenuItem } from "./components/Navigation";

export default function Home() {
  const codeFile = `def evenNums(start, end, step):
  for i in range(start, end, step)
      if not i % 2:
          yield i#
  return "No even numbers found!"`;
  const codeLanguage = "PYTHON";
  return (
    <>
      {/* <Navigation>
        <MenuItem children={"Home"} />
        <MenuItem children={"Help Improve"} />
        <MenuItem children={"About"} />
        <MenuItem children={"Exit"} />
      </Navigation> */}
      <Header />
      <TopSection />
      <MidSection />
      <CodeSection codeFile={codeFile} codeLanguage={codeLanguage} />
      <BottomSection />
      <Footer />
    </>
  );
}
