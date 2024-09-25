import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div>
      <header className="p-1">
        <UserButton afterSignOutUrl="/"/>
        {/* <SignedOut>
              <SignInButton />
            </SignedOut> */}
      </header>{" "}
    </div>
  );
};

export default Home;
