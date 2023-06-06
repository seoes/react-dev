import { Div, Title } from "../components";
import * as D from "../data"

export default function MinMaxTest() {
    return (
        <section className="mt-4">
            <Title>MinMaxTest</Title>
            <Div className="p-4 bg-gray-300">
                <Div className="bg-cover" src={D.randomImage()}>
                    {/* <Div>123</Div> */}
                    <Div className="w-1/2 h-80 bg-blue-500" minWidth="300px" maxWidth="500px"/>
                </Div>
            </Div>
        </section>
    )
}