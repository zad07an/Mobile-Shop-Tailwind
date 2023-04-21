import React from "react";

export default function About() {
  return (
    <section className=" w-full py-10 flex items-center flex-col gap-6">
      <header>
        <h2 className="text-3xl uppercase text-gray-500 font-medium">About</h2>
      </header>
      <div className=" w-[90%] grid grid-cols-2 gap-5">
        <div className=" flex flex-col gap-2">
          <div>
            <p className=" text-3xl text-gray-700">Մեր մասին</p>
          </div>
          <div>
            <p className=" text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, aperiam. Inventore architecto quo, ea ipsa vel porro, illo rerum culpa eius quisquam repudiandae minima odit doloremque dolor voluptatem incidunt veritatis eum aliquid nesciunt laboriosam iusto facilis! Eos, optio dolore culpa temporibus ullam aut! Et delectus aliquid tempora magnam ab incidunt amet dignissimos dolores iusto nihil illum nobis, doloremque cupiditate at earum perferendis placeat rem voluptatem autem ipsum! Provident ullam, quia dolores quaerat, maxime similique aut est porro quisquam commodi minus odio! Ipsa ab alias libero nemo quaerat, non rem quisquam dicta amet corporis beatae ullam ad porro asperiores rerum vitae.</p>
          </div>
        </div>
        <div className=" overflow-hidden rounded-lg brightness-50">
          <img src="https://cdn.archilovers.com/projects/b_730_558726c0-2e90-44c9-b6f7-4c4bf0bbfe9a.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}
