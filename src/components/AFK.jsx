import React from 'react'
const people = [
  {
    name: 'Carlos Briceño',
    role: 'Co-Founder / CEO',
    imageUrl:
    'https://valorantinfo.com/images/es/grafiti-aqui-estoy_valorant_transparent_icon_51599.webp'
  }, {
    name: 'Fabian Montoya',
    role: 'Co-Founder / CEO',
    imageUrl:
        'https://valorantinfo.com/images/es/grafiti-reviveme-jett_valorant_full_icon_4544.webp'
  }, {
    name: 'Josue Castro',
    role: 'Co-Founder / CEO',
    imageUrl:
        'https://img.freepik.com/premium-vector/valorant-gaming-character-mascot-design-omen-mascot-logo-design-illustration-vector_268458-430.jpg?w=740'
  }
]

const AFK = () => {
  return (<>
        <div className="bg-base-200 py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet our leadership</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
                suspendisse.
              </p>
            </div>
            <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
              {people.map((person) => (
                <li key={person.name}>
                  <div className="flex items-center gap-x-6">
                    <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-600">{person.name}</h3>
                      <p className="text-sm font-semibold leading-6 text-white">{person.role}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </>
  )
}

export default AFK
