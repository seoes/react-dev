import { Input } from "../../theme/daisyui";

export default function Border() {
    return (
        <section className="mt-4">
            <h2 className="font-bold text-5xl text-center">Color</h2>
            <div className="mt-4 flex flex-col p-4">
                <div>
                    <label className="label">input-bordered</label>
                    <Input className="input-bordered" />
                </div>
                <div>
                    <label className="label">input-ghost</label>
                    <Input className="input-ghost" />
                </div>
            </div>
        </section>
    );
}
