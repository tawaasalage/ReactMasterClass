import React from "react";
import InlineBox from "../components/InlineBox";
import ModuleBox from "../components/ModuleBox";
import StyledBox from "../components/StyledBox";

export default function Home() {
  return (
    <div>
      <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-sky-400/40 transition-colors">
        <h3 className="text-white font-bold text-xl mb-2">Lorem, ipsum.</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, quae.
        </p>
      </div>

      <StyledBox />
      <InlineBox />
      <ModuleBox />
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}
