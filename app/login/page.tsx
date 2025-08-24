import SignInButtons from "../_components/SignInButtons";

export const metadata = {
  title: "Login",
  description: "Login via Google or Github ",
};

export default function Page() {
  return (
    <div className="mt-10 flex flex-col items-center gap-10">
      <h2 className="text-3xl font-semibold">
        Sign in to access your guest area
      </h2>

      <SignInButtons />
    </div>
  );
}
