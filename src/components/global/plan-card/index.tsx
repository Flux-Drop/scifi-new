import { ShinyButton } from '@/components/magicui/shiny-button';

interface IPlanTypeProps {
    selectedMonths: number;
    plan: {
      name: string;
      speed: string;
      prices: {
        [key: number]: number; // Maps number of months (e.g., 1, 3, 6, 9, 12) to price
      };
      ott: string[];
      otherBenefits: string[];
    };
  }



const PlanCard = ({plan, selectedMonths}:IPlanTypeProps) => {
  return (
    <div
            key={plan.name}
            className="backdrop-blur-lg border border-white/20 p-6 flex flex-col gap-2 transition-all rounded-3xl shadow-[inset_0px_18px_45px_-25px_#7F7F90] overflow-hidden bg-[url(/assets/plan-card-bg.svg)] h-full w-auto"
          >
            <div className='flex flex-col gap-2.5'>
              <h3 className="text-2xl font-semibold">{plan.name}</h3>
              <p className="text-sm text-white/70">{plan.speed}</p>
            </div>
            
            <div className='mt-3'>
              <p className="text-3xl font-bold">
                ₹{plan.prices[selectedMonths]}
                <span className="text-sm font-normal">
                  {" "}
                  / {selectedMonths === 1 ? "month" : `${selectedMonths} months`}
                </span>
              </p>
            </div>
            <ShinyButton className="bg-[url('/assets/cta.png')] rounded-full font-semibold bg-cover mt-6">
                        <span className="text-black capitalize">Choose Plan</span>
                      </ShinyButton>
            <div className='mt-3'>
              <h4 className="text-lg font-medium">OTT Subscriptions</h4>
              <ul className="text-sm text-white list-disc flex flex-wrap">
                {plan.ott.map((ott) => (
                  <span key={ott}>{ott}, </span>
                ))}
              </ul>
            </div>
            <div className='mt-3'>
              <h4 className="text-lg font-medium">Other Benefits</h4>
              <ul className="text-sm text-white list-disc pl-5">
                {plan.otherBenefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </div>
           
          </div>
  )
}

export default PlanCard