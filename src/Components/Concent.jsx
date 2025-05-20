import React from 'react'
import {Sour_Gummy} from 'next/font/google'
const sour=Sour_Gummy({
  subsets:['latin-ext'],
  weight:['400']
})
const IntroScreen = ({ setMusic }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh h-auto bg-[#0000008D] text-center px-4">
      <div className={`w-[300px] bg-gray-500 rounded-2xl p-4 mb-3 ${sour.className}`}>
        <h1 className="text-3xl font-semibold mb-4">Hey! 🎵</h1>
        <p className="mb-6">
          Did you know light music can instantly uplift your mood?
          Would you like some soothing background music while browsing?
        </p>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => setMusic(true)}
            className="bg-[#0000008D] text-white px-6 py-2 rounded-full hover:bg-purple-700 transition"
          >
            Yes
          </button>
          <button
            onClick={() => setMusic(false)}
            className="bg-[#0000008D] text-white px-6 py-2 rounded-full hover:bg-purple-700 transition"
          >
            No
          </button>
        </div>
      </div>
    </div>
  )
}

export default IntroScreen
