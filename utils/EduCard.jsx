import Image from 'next/image';
import Link from 'next/link';
import {BiLink} from 'react-icons/bi'
const EduCard = ({ institution, degree, startDate, endDate, url }) => {
	return (
		<div className='md:flex items-center gap-3 p-4 bg-sh-dark-500 border-2 border-sh-dark rounded-lg text-sh-white hover:shadow-lg transition-transform transform ease-in hover:scale-[1.02]'>
			<div className='flex items-center gap-3'>
				
				<h3 className='md:hidden block text-lg md:text-xl font-bold'>
					{institution}
				</h3>
			</div>
			<div className='mt-1'>
				<div>
					<h3 className='hidden md:block text-lg md:text-xl font-bold'>
						{institution}
					</h3>
					<p>{degree}</p>
					<p className='text-sm text-sh-white-500'>
						<span>{startDate}</span> - <span>{endDate}</span>
					</p>
					{url && <p className='text-sm text-sh-white-500'>
						<a className="cursor-pointer transition-all hover:scale-105 text-sh-blue "><Link  href={url}>{<BiLink size={30}/>}</Link></a>
					</p>}
				</div>
				
			</div>
		</div>
	);
};

export default EduCard;
