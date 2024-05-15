import { Button, Container, TextInput, Textarea, Title } from "@mantine/core";

export default function Contact() {
  return (
    <form className="w-[600px] max-w-full mx-auto my-20">
      <Container>
        <div className="text-center">
          <Title order={2} className="mb-7 text-2xl">
            Contact Us
          </Title>
          <p className="text-textColor text-sm">
            Got a technical issue? want to send feedback about abeta feature?
            let us know
          </p>
        </div>

        <div className="my-5">
          <TextInput placeholder="example@gmail.com" label="Your Email" />
        </div>

        <div className="my-5">
          <TextInput
            placeholder="let us know how we can help you"
            label="Subject"
          />
        </div>

        <div className="my-5">
          <Textarea placeholder="Leave a comment" label="Your Message" />
        </div>

        <Button className="!bg-primaryColor" type="submit">
          Submit
        </Button>
      </Container>
    </form>
  );
}
