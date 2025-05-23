import Hello from "@/app/components/Hello";

export default function Home(){
    console.log('Home');
  return (
      <>
        <h1 className="text-3xl">Welcome to NextJS Course.</h1>
        <Hello />
      </>

  )
}