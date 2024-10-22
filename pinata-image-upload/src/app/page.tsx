import uploadImage from "@/actions/uploadImage";

export default function Home() {
  return (
    <form action={uploadImage}>
      <input type="file" name="file" />
      <button type="submit">Submit</button>
    </form>
  );
}
