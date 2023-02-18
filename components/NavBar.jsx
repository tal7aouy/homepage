import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaGithub } from 'react-icons/fa';
import UserImg from '../public/assets/images/icons/icon-565x565.png';

const NavBar = () => {
	const router = useRouter();

	const webLinks = [
		{ name: 'About', path: '/about' },
		{ name: 'Projects', path: '/projects' },
		{ name: 'Resume', path: '/resume.pdf' },
	];

	return (
		<>
			<div className='bg-sh-dark-500 bg-opacity-80 sticky top-0 z-20 backdrop-filter backdrop-blur-sm shadow-lg'>
				<div className='max-w-[50rem] mx-auto w-full px-5 py-2.5 md:px-10 lg:px-0'>
					<div className='flex items-center w-full'>
						<div className='w-2/4 justify-start items-center inline-flex'>
							<div className='dropdown'>
								<label tabIndex={0} className='lg:hidden'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='bg-sh-dark p-2 rounded-lg h-9 w-9 mr-5 cursor-pointer'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M4 6h16M4 12h8m-8 6h16'
										/>
									</svg>
								</label>
								<ul
									tabIndex={0}
									className='border border-sh-white-500 bg-sh-dark-500 bg-opacity-[0.97] backdrop-filter backdrop-blur-3xl shadow-lg shadow-sh-dark-500 rounded-md dropdown-content mt-3 px-2 py-5 w-64 space-y-5'
								>
									{webLinks.map((link, index) => (
										<li key={index}>
											<Link href={link.path}>
												<a
													className={
														router.pathname == link.path
															? 'menu-item active'
															: 'menu-item'
													}
												>
													{link.name}
												</a>
											</Link>
										</li>
									))}
								</ul>
							</div>
							<Link href='/'>
								<a className='rounded-full border-2 border-x-sh-blue flex mr-7 w-10 h-10 scale-90 hover:scale-100 transition ease-in select-none'>
									<svg
                      className="w-full inline-block transition-transform group-hover:rotate-[20deg]"
                      viewBox="0 0 40 40"
                      fill="currentColor"
                    >
                      <g transform="matrix(1.07541,0,0,1.1001,-1.05651,-0.978215)">
                        <path
                          fill="currentColor"
                          d="M13.319,4.13C13.319,4.13 10.313,4.08 9.501,9.535C9.133,13.546 12.568,15.516 14.12,15.497C15.556,15.495 17.638,14.151 17.486,9.765C17.334,5.38 14.98,4.15 13.319,4.13"
                        />
                      </g>
                      <path d="M3.12,15.575C2.626,16.02 0.637,18.024 3.508,22.915C6.379,27.806 8.628,23.888 8.923,23.455C9.218,23.021 11.41,20.306 8.664,16.924C5.918,13.543 3.12,15.575 3.12,15.575Z" />
                      <g transform="matrix(1.00722,0,0,0.981856,-0.205441,0.281328)">
                        <path d="M24.03,4.13C22.048,4.309 20.472,5.325 20.922,9.814C21.373,14.304 24.4,15.613 25.402,15.499C26.404,15.385 28.84,12.521 28.427,9.814C28.013,7.107 26.837,4.296 24.03,4.13Z" />
                      </g>
                      <path d="M32.114,11.35C32.114,11.35 29.196,13.155 30.864,16.589C32.532,20.023 34.677,19.25 36,18.588C37.322,17.927 38.02,14.778 35.931,12.665C33.843,10.551 32.114,11.35 32.114,11.35Z" />
                      <path d="M19.212,17.136C19.212,17.136 12.651,19.306 12.84,25.174C12.888,28.022 10.569,28.548 11.073,32.567C11.727,34.322 12.649,36.92 15.89,36.85C19.131,36.781 19.603,34.354 23.377,32.97C27.151,31.586 31.009,33.828 33.802,31.213C36.596,28.598 35.188,24.468 31.876,22.731C28.564,20.995 24.793,16.327 19.212,17.136Z" />
                    </svg>
								</a>
							</Link>
							<div className='hidden lg:flex'>
								<ul className='inline-flex flex-row gap-3'>
									{webLinks.map((link, index) => (
										<li key={index}>
											<Link href={link.path}>
												<a
													className={
														router.pathname == link.path
															? 'menu-item active'
															: 'menu-item'
													}
												>
													{link.name}
												</a>
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>

						<div className='w-2/4 justify-end text-xl flex gap-3'>
							<a
								target='_blank'
								rel='noopener noreferrer'
								href='https://github.com/tal7aouy'
								className='cursor-pointer p-3 rounded-xl hover:bg-sh-dark transition ease-in'
							>
								<FaGithub />
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NavBar;
