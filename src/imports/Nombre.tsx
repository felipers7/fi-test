export default function Nombre() {
  return (
    <div className="relative size-full" data-name="Nombre">
      <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-center leading-[0] p-0 relative size-full text-left">
        <div
          className="flex flex-col font-['Roboto:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-neutral-700 w-full"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <p className="block leading-[normal]">José Rodríguez</p>
        </div>
        <div
          className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#9e9e9e] text-[11px] w-full"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <p className="block leading-[normal]">Administrador</p>
        </div>
      </div>
    </div>
  );
}