import Editor from "../components/editor";
import Header from "../components/header";
import Container from "../layouts/shared/container";

export default function NewEntiry(){
    return(
        <>
            <Header />
            <main>
                <Container>
                    <Editor />
                </Container>
            </main>
        </>
    );
}