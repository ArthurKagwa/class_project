import Navigation from '@/components/Navigation'

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Get in touch with us for orders, inquiries, or feedback
          </p>
        </div>
        <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                Phone number
              </label>
              <div className="mt-2.5">
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-rose-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
            >
              Send message
            </button>
          </div>
        </form>

        <div className="mx-auto max-w-2xl text-center mt-16">
          <h3 className="text-lg font-semibold text-gray-900">Other ways to reach us</h3>
          <dl className="mt-8 text-base leading-7 text-gray-600">
            <div className="mt-6">
              <dt className="font-semibold text-gray-900">Customer Help Centre</dt>
              <dd>0782181005 / 0752235593</dd>
            </div>
            <div className="mt-6">
              <dt className="font-semibold text-gray-900">Sales Manager</dt>
              <dd>0786006906 / 0740366086</dd>
            </div>
            <div className="mt-6">
              <dt className="font-semibold text-gray-900">Email</dt>
              <dd>sweetbliss@gmail.com</dd>
            </div>
            <div className="mt-6">
              <dt className="font-semibold text-gray-900">Address</dt>
              <dd>P.O Box 92, Kampala, Uganda</dd>
            </div>
            <div className="mt-6">
              <dt className="font-semibold text-gray-900">Social Media</dt>
              <dd>Instagram: @sweetbliss.com</dd>
              <dd>X: @sweetbliss.com</dd>
            </div>
          </dl>
        </div>
      </div>
    </main>
  )
} 