
import SectionTitles from './SectionTitles';



export default function Work(props: any) {

  return (
    <div className='w-full h-full flex flex-col justify-center items-center z-30'>
      <div className='container w-full h-full px-10 lg:px-36 py-14 lg:py-36 flex flex-col justify-between items-center'>
        {/***Title section***/}
        <div className='w-full h-fit'>
          <SectionTitles
            title='My most recent works'
            titleWatermark='WORK'
          />
        </div>
        {/***Content section***/}
        <div className='w-full h-full'>
          content
        </div>
      </div>
    </div>
  )
}