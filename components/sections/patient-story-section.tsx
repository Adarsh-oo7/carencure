export function PatientStorySection() {
  const frustrations = [
    'We never seem to speak to the same person twice.',
    "Mum's wound is being dressed, but nobody explains if it's improving.",
    'Dad keeps repeating his story to different carers.',
    "We don't know who is actually in charge of the care.",
    "We're worried something important is being missed.",
    'The system feels confusing and overwhelming.',
  ]

  return (
    <section className="py-20 bg-white" aria-labelledby="familiar-heading">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-label mb-3">Does This Sound Familiar?</p>
          <h2 id="familiar-heading" className="text-navy mb-4">
            Common Home Care Frustrations
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        {/* Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {frustrations.map((quote, i) => (
            <div
              key={i}
              className="card-base p-6 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col justify-between relative animate-fade-in"
            >
              {/* Decorative quotation mark */}
              <div
                className="absolute top-2 left-4 text-6xl leading-none font-serif select-none pointer-events-none text-red-500/10"
                aria-hidden="true"
              >
                &ldquo;
              </div>
              <p className="text-body text-base italic leading-relaxed relative z-10 pl-4">
                {quote}
              </p>
            </div>
          ))}
        </div>

        {/* Transition statement & Better way card */}
        <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-navy font-bold text-2xl">
              If this sounds familiar, you are not alone.
            </h3>
            <p className="text-body text-base leading-relaxed">
              Many Australian families feel they are coordinating care themselves instead of receiving care.
            </p>
            <p className="font-semibold text-red-500">
              That&apos;s not how it should be.
            </p>
          </div>

          <div className="lg:col-span-3 bg-teal-700 text-white rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden">
            {/* Visual glow indicator */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-accent/20 rounded-full blur-3xl pointer-events-none" />
            
            <p className="text-teal-300 text-sm font-semibold uppercase tracking-widest mb-3">
              There Is A Better Way
            </p>
            <h3 className="text-white font-bold text-2xl mb-4">
              At The Nurse Who Knows You, we do home care differently.
            </h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              Every client is assigned a dedicated Nurse Coordinator who becomes your consistent, trusted point of contact.
            </p>
            
            <div className="flex flex-col gap-2 font-medium text-teal-100 border-t border-teal-600 pt-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-300" />
                Not a rotating roster
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-300" />
                Not a call centre
              </div>
              <div className="flex items-center gap-2 font-bold text-white text-lg">
                <span className="w-2 h-2 rounded-full bg-teal-accent" />
                A nurse who knows you.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
