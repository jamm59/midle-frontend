import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import MidSection from "./components/MidSection";
import CodeSection from "./components/CodeSection";

export default function Home() {
  const codeFile = `def evenNums(start, end, step):
  for i in range(start, end, step)
      if not i % 2:
          yield i#
  return "No even numbers found!"`;
  const codeLanguage = "PYTHON";
  return (
    <>
      <Header />
      <Section />
      <MidSection />
      <CodeSection codeFile={codeFile} codeLanguage={codeLanguage} />
      <Footer />
    </>
  );
}
