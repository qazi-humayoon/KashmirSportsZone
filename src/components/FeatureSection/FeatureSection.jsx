import React from 'react';

function FeatureSection() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between pt-28 px-4'>
      <div className='w-full md:w-2/3 lg:w-1/2 pl-4 md:pl-14'>
        <h1 className='font-bold text-2xl md:text-4xl mb-4 md:mb-8'>
          Keep yourself informed with <br className='hidden md:block' /> the most recent sports updates
        </h1>
        <p className='mb-4 md:mb-8'>
          Get all the latest sports news, live cricket matches, player updates, and <br className='hidden md:block' />
          more in one place
        </p>

        <div className='flex flex-col md:flex-row items-start gap-6 md:gap-14 mt-4 md:mt-9'>
          <div className='max-w-full md:max-w-xs'>
            <i className='ri-copper-diamond-fill text-2xl md:text-4xl mb-2'></i>
            <h2 className='font-bold pb-2 text-lg md:text-xl'>Live Updates</h2>
            <p className='leading-relaxed text-sm md:text-base'>
              Stay informed with the latest scores, match highlights, and player performances.
            </p>
          </div>
          <div className='max-w-full md:max-w-xs'>
            <i className='ri-copper-diamond-fill text-2xl md:text-4xl mb-2'></i>
            <h2 className='font-bold pb-2 text-lg md:text-xl'>Player Updates</h2>
            <p className='leading-relaxed text-sm md:text-base'>
              Get insights into the performance and achievements of your favorite sports personalities.
            </p>
          </div>
        </div>
      </div>

      <div className='w-full md:w-1/3 lg:w-1/2 flex justify-center md:justify-end pr-0 md:pr-14 mt-8 md:mt-0'>
        <img
          className='w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] object-cover rounded-md'
          src='https://images.pexels.com/photos/4747325/pexels-photo-4747325.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt='Sports Update'
        />
      </div>
    </div>
  );
}

export default FeatureSection;
