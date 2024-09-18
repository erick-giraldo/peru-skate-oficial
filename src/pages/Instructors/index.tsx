import React from "react";
import { Waves, Bike, Dumbbell, Activity } from "lucide-react";

const SurfTrainingDashboard: React.FC = () => (
  <div className="relative">
    <div className="absolute top-[50px] left-0 right-0 z-[3]">
      <h1 className="text-white text-3xl text-center uppercase">
        Centro de Alto Rendimiento para el Surf
      </h1>
    </div>
    <div className="relative overflow-hidden flex h-[450px]">
      <div className="overflow-hidden w-[27%] h-[160%] rotate-20 absolute top-[-17%] left-[-4%] z-10">
        <div className="relative -rotate-20 w-[150%] h-[63%] mt-[12%]">
          <div className="absolute top-[30%] right-0 left-0 m-auto ml-[30%]">
            <div className="text-white mb-2"><Waves className="w-6 h-6" /></div>
            <h3 className="text-xl font-bold text-white mb-2">Surf Training</h3>
            <p className="text-sm text-gray-200 mb-4">
              Cada atleta entra con una actividad y/o tarea específica. Cada una de estas sesiones es evaluada por el coach a cargo.
            </p>
            <a href="#" className="text-blue-300">Ver video</a>
          </div>
          <div className="absolute h-full left-0 right-0 top-0 bg-customBlue"></div>
          <img src="/images/instructors/area_trabajo_surf2-2019.jpg" alt="Surf Training" />
        </div>
      </div>

      <div className="overflow-hidden w-[30%] h-[160%] rotate-20 absolute top-[-20%] left-[20%]">
        <div className="relative -rotate-20 w-[150%] h-[63%] mt-[12%]">
          <div className="absolute top-[30%] right-0 left-0 m-auto ml-[30%]">
            <div className="text-white mb-2"><Bike className="w-6 h-6" /></div>
            <h3 className="text-xl font-bold text-white mb-2">Skate Training</h3>
            <p className="text-sm text-gray-200 mb-4">
              Contamos con una SurfRamp donde los alumnos mejoran su técnica, fluidez y trabajan sus aéreos.
            </p>
            <a href="#" className="text-blue-300">Ver video</a>
          </div>
          <div className="absolute h-full left-0 right-0 top-0 bg-customBlue"></div>
          <img src="/images/instructors/area_trabajo_skate2-2019.jpg" alt="Skate Training" />
        </div>
      </div>

      <div className="overflow-hidden w-[30%] h-[160%] rotate-20 absolute top-[-20%] left-[49%]">
        <div className="relative -rotate-20 w-[150%] h-[63%] mt-[12%]">
          <div className="absolute top-[30%] right-0 left-0 m-auto ml-[30%]">
            <div className="text-white mb-2"><Dumbbell className="w-6 h-6" /></div>
            <h3 className="text-xl font-bold text-white mb-2">Core Training</h3>
            <p className="text-sm text-gray-200 mb-4">
              Accede a equipos deportivos especializados para incrementar fuerza y flexibilidad y potencia tu surf.
            </p>
            <a href="#" className="text-blue-300">Ver video</a>
          </div>
          <div className="absolute h-full left-0 right-0 top-0 bg-customBlue"></div>
          <img src="/images/instructors/area_trabajo_core1-2019.jpg" alt="Core Training" />
        </div>
      </div>

      <div className="overflow-hidden w-[30%] h-[160%] rotate-20 absolute top-[-20%] left-[78%]">
        <div className="relative -rotate-20 w-[150%] h-[63%] mt-[12%]">
          <div className="absolute top-[30%] right-0 left-0 m-auto ml-[30%]">
            <div className="text-white mb-2"><Activity className="w-6 h-6" /></div>
            <h3 className="text-xl font-bold text-white mb-2">Ginastica Natural</h3>
            <p className="text-sm text-gray-200 mb-4">
              Deporte de defensa personal desarrollado en Brasil que otorga seguridad y autoestima
            </p>
            <a href="#" className="text-blue-300">Ver video</a>
          </div>
          <div className="absolute h-full left-0 right-0 top-0 bg-customBlue"></div>
          <img src="/images/instructors/Screenshot_12.png" alt="Ginastica Natural" />
        </div>
      </div>
    </div>
  </div>
);

export default SurfTrainingDashboard;
