import { HiExternalLink } from 'react-icons/hi'

function CountyLeaderboard({ props }) {
  const reviews = props;

  return (
    <div className="w-full">
      <h1 className='text-2xl sm:text-4xl text-[#D8C060]'>
        County Leaderboard
      </h1>
      {reviews.length ?
        <div className="flex flex-col">
          <div className="my-2 overflow-x-auto">
            <div className="py-2 align-middle inline-block">
              <div className="shadow overflow-hidden border-b border-gray-200 rounded-lg">
                <table className="divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Pub
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        County
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Rating
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {reviews.map((review, index) => (
                      <tr key={review._id} className={`${index === 0 ? 'bg-[#FFD700] bg-opacity-50 hover:bg-opacity-90' : 'bg-slate-100'} hover:bg-slate-200`}>
                        <td className="px-6 py-4 whitespace-pre-wrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img className="h-10 w-10 rounded-full object-cover" src={review.logo} alt={review.pubName} />
                            </div>
                            <div className="ml-4">
                              <div className="font-medium text-gray-900">
                                <p className='text-sm leading-5 sm:text-lg sm:leading-6'>
                                  {review.pubName}
                                </p>
                              </div>
                              {/* <div className="text-xs text-gray-500">Website</div> */}
                            </div>
                          </div>
                        </td>
                        <td className="sm:px-6 py-4 whitespace-pre-wrap">
                          <div className="text-sm text-gray-900">{review.county}</div>
                          <div className="text-xs text-gray-500">
                            <span>
                              {review.town} - <a href={review.website}>
                                <HiExternalLink size={15} className="inline -mt-1" />
                              </a>
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-pre-wrap">
                          <span className={`px-3 inline-flex text-xl py-2 font-semibold rounded-full bg-green-200 text-green-800`}>
                            {review.rating}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        : null
      }
    </div>
  )
}

export default CountyLeaderboard
