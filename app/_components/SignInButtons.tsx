import Image from "next/image";
import { signInActionGitHub, signInActionGoogle } from "../_lib/actions";

function SignInButtons() {
  return (
    <div className="flex flex-col gap-y-10">
      <form action={signInActionGoogle}>
        <button className="border-primary-300 flex cursor-pointer items-center gap-6 border px-10 py-4 text-lg font-medium">
          <Image
            src="https://authjs.dev/img/providers/google.svg"
            alt="Google logo"
            height="27"
            width="27"
          />
          <span>Continue with Google</span>
        </button>
      </form>
      <form action={signInActionGitHub}>
        <button className="border-primary-300 flex cursor-pointer items-center gap-6 border px-10 py-4 text-lg font-medium">
          <Image
            src="https://authjs.dev/img/providers/github.svg"
            alt="Google logo"
            height="27"
            width="27"
          />
          <span>Continue with GitHub</span>
        </button>
      </form>
    </div>
  );
}

export default SignInButtons;
