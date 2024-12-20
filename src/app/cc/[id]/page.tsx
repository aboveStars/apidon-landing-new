export default function Page() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-800 p-6 text-white">
      <div className="text-center">
        <div className="loader mb-6"></div>
        <h1 className="text-4xl font-extrabold text-indigo-400">
          Redirecting to Apidon App...
        </h1>
        <p className="mt-3 text-lg text-gray-300">
          You&apos;ll be redirected to the app in a few seconds.
        </p>
        <p className="text-md mt-5 text-gray-400">
          If you&apos;re using an Android device, the app will become available
          soon. Stay tuned!
        </p>
      </div>
    </div>
  );
}
