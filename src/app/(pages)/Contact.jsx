import SparkleText from "@/components/helper/SparkleText";
import Form from "../../components/helper/Form";

export default function Contact() {
    return (
        <section>
            <h2 className="md:text-center"><SparkleText text="Get in Touch" /></h2>
            <p className="text-center text-muted-foreground w-11/12 md:w-1/2 mx-auto">Feel free to drop me a message anytime.</p>
            <Form />
        </section>
    )
}
