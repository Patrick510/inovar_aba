export default function Estatistics() {
  return (
    <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100">
      <div className="text-center">
        <div className="text-3xl font-bold text-teal-500">500+</div>
        <div className="text-sm text-gray-600">Pacientes Atendidos</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-pink-400">15+</div>
        <div className="text-sm text-gray-600">Profissionais</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-yellow-400">8</div>
        <div className="text-sm text-gray-600">Anos de Experiência</div>
      </div>
    </div>
  );
}
