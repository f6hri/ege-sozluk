import Header from "./components/header";
import Container from "./layouts/shared/container";
import PopularList from "./layouts/popularList";
import Flow from "./layouts/flow";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mt-5">
        <Container>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">
              <PopularList />
            </div>
            <div className="col-span-2">
              <Flow />
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}