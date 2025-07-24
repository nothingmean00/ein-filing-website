export default function FormSS4Reference() {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden bg-white">
      {/* Form Header */}
      <div className="p-4 bg-gray-100 border-b border-gray-300">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <p className="text-xs text-gray-500">Department of the Treasury</p>
            <p className="text-xs text-gray-500">Internal Revenue Service</p>
            <h2 className="text-lg font-bold mt-1">Application for Employer Identification Number</h2>
            <p className="text-xs text-gray-500 mt-1">
              (For use by employers, corporations, partnerships, trusts, estates, churches, government agencies, Indian
              tribal entities, certain individuals, and others.)
            </p>
          </div>
          <div className="mt-2 md:mt-0">
            <p className="text-xs text-gray-500">OMB No. 1545-0003</p>
            <p className="text-sm font-bold">EIN</p>
          </div>
        </div>
        <p className="text-sm mt-2">See separate instructions for each line. Keep a copy for your records.</p>
        <p className="text-sm">Go to www.irs.gov/FormSS4 for instructions and the latest information.</p>
      </div>

      {/* Form Body */}
      <div className="p-4">
        <div className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="md:col-span-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                1. Legal name of entity (or individual) for whom the EIN is being requested
              </label>
              <div className="h-10 border border-gray-300 rounded-md bg-gray-50"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                2. Trade name of business (if different from name on line 1)
              </label>
              <div className="h-10 border border-gray-300 rounded-md bg-gray-50"></div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                3. Executor, administrator, trustee, "care of" name
              </label>
              <div className="h-10 border border-gray-300 rounded-md bg-gray-50"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                4a. Mailing address (room, apt., suite no. and street, or P.O. box)
              </label>
              <div className="h-10 border border-gray-300 rounded-md bg-gray-50"></div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                4b. City, state, and ZIP code (if foreign, see instructions)
              </label>
              <div className="h-10 border border-gray-300 rounded-md bg-gray-50"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                5a. Street address (if different) (Don't enter a P.O. box.)
              </label>
              <div className="h-10 border border-gray-300 rounded-md bg-gray-50"></div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                5b. City, state, and ZIP code (if foreign, see instructions)
              </label>
              <div className="h-10 border border-gray-300 rounded-md bg-gray-50"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                6. County and state where principal business is located
              </label>
              <div className="h-10 border border-gray-300 rounded-md bg-gray-50"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">7a. Name of responsible party</label>
                <div className="h-10 border border-gray-300 rounded-md bg-gray-50"></div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">7b. SSN, ITIN, or EIN</label>
                <div className="h-10 border border-gray-300 rounded-md bg-gray-50"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                8a. Is this application for a limited liability company (LLC) (or a foreign equivalent)?
              </label>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center">
                  <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                  <span className="ml-2 text-sm">Yes</span>
                </div>
                <div className="flex items-center">
                  <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                  <span className="ml-2 text-sm">No</span>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                8b. If 8a is "Yes," enter the number of LLC members
              </label>
              <div className="h-10 border border-gray-300 rounded-md bg-gray-50"></div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                8c. If 8a is "Yes," was the LLC organized in the United States?
              </label>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center">
                  <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                  <span className="ml-2 text-sm">Yes</span>
                </div>
                <div className="flex items-center">
                  <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                  <span className="ml-2 text-sm">No</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              9a. Type of entity (check only one box). Caution: If 8a is "Yes," see the instructions for the correct box
              to check.
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-4 mt-2">
              <div className="flex items-center">
                <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                <span className="ml-2 text-sm">Sole proprietor (SSN)</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                <span className="ml-2 text-sm">Partnership</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                <span className="ml-2 text-sm">Corporation</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                <span className="ml-2 text-sm">Personal service corporation</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                <span className="ml-2 text-sm">Church or church-controlled organization</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                <span className="ml-2 text-sm">Other nonprofit organization</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                <span className="ml-2 text-sm">Estate (SSN of decedent)</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                <span className="ml-2 text-sm">Trust (TIN of grantor)</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                <span className="ml-2 text-sm">Military/National Guard</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                <span className="ml-2 text-sm">Farmers' cooperative</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                <span className="ml-2 text-sm">REMIC</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                <span className="ml-2 text-sm">State/local government</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                <span className="ml-2 text-sm">Federal government</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                <span className="ml-2 text-sm">Indian tribal governments/enterprises</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                <span className="ml-2 text-sm">Other</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                9b. If a corporation, name the state or foreign country (if applicable) where incorporated
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">State</label>
                  <div className="h-10 border border-gray-300 rounded-md bg-gray-50"></div>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Foreign country</label>
                  <div className="h-10 border border-gray-300 rounded-md bg-gray-50"></div>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                10. Reason for applying (check only one box)
              </label>
              <div className="grid grid-cols-1 gap-y-2 mt-2">
                <div className="flex items-center">
                  <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                  <span className="ml-2 text-sm">Started new business</span>
                </div>
                <div className="flex items-center">
                  <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                  <span className="ml-2 text-sm">Hired employees</span>
                </div>
                <div className="flex items-center">
                  <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                  <span className="ml-2 text-sm">Banking purpose</span>
                </div>
                <div className="flex items-center">
                  <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                  <span className="ml-2 text-sm">Changed type of organization</span>
                </div>
                <div className="flex items-center">
                  <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                  <span className="ml-2 text-sm">Purchased going business</span>
                </div>
                <div className="flex items-center">
                  <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                  <span className="ml-2 text-sm">Created a trust</span>
                </div>
                <div className="flex items-center">
                  <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                  <span className="ml-2 text-sm">Other</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                11. Date business started or acquired (month, day, year)
              </label>
              <div className="h-10 border border-gray-300 rounded-md bg-gray-50"></div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                12. Closing month of accounting year
              </label>
              <div className="h-10 border border-gray-300 rounded-md bg-gray-50"></div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                13. Highest number of employees expected in the next 12 months
              </label>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Agricultural</label>
                  <div className="h-10 border border-gray-300 rounded-md bg-gray-50"></div>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Household</label>
                  <div className="h-10 border border-gray-300 rounded-md bg-gray-50"></div>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Other</label>
                  <div className="h-10 border border-gray-300 rounded-md bg-gray-50"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                14. If you expect your employment tax liability to be $1,000 or less in a full calendar year...
              </label>
              <div className="flex items-center mt-2">
                <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                <span className="ml-2 text-sm">Check here to file Form 944 annually</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                15. First date wages or annuities were paid (month, day, year)
              </label>
              <div className="h-10 border border-gray-300 rounded-md bg-gray-50"></div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              16. Check one box that best describes the principal activity of your business
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-4 mt-2">
              <div className="flex items-center">
                <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                <span className="ml-2 text-sm">Construction</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                <span className="ml-2 text-sm">Real estate</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                <span className="ml-2 text-sm">Rental & leasing</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                <span className="ml-2 text-sm">Manufacturing</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                <span className="ml-2 text-sm">Transportation & warehousing</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                <span className="ml-2 text-sm">Finance & insurance</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                <span className="ml-2 text-sm">Health care & social assistance</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                <span className="ml-2 text-sm">Accommodation & food service</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                <span className="ml-2 text-sm">Wholesale—agent/broker</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                <span className="ml-2 text-sm">Wholesale—other</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                <span className="ml-2 text-sm">Retail</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                <span className="ml-2 text-sm">Other</span>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              17. Indicate principal line of merchandise sold, specific construction work done, products produced, or
              services provided
            </label>
            <div className="h-10 border border-gray-300 rounded-md bg-gray-50"></div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              18. Has the applicant entity shown on line 1 ever applied for and received an EIN?
            </label>
            <div className="flex items-center space-x-4 mt-2">
              <div className="flex items-center">
                <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                <span className="ml-2 text-sm">Yes</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border border-gray-300 rounded-sm bg-gray-50"></div>
                <span className="ml-2 text-sm">No</span>
              </div>
            </div>
            <div className="mt-2">
              <label className="block text-xs text-gray-600 mb-1">If "Yes," write previous EIN here</label>
              <div className="h-10 w-1/2 border border-gray-300 rounded-md bg-gray-50"></div>
            </div>
          </div>
        </div>

        {/* Third Party Designee */}
        <div className="mb-6 border-t border-gray-300 pt-4">
          <h3 className="text-sm font-bold mb-2">Third Party Designee</h3>
          <p className="text-xs text-gray-600 mb-2">
            Complete this section only if you want to authorize the named individual to receive the entity's EIN and
            answer questions about the completion of this form.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Designee's name</label>
              <div className="h-10 border border-gray-300 rounded-md bg-gray-50"></div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Designee's telephone number (include area code)
              </label>
              <div className="h-10 border border-gray-300 rounded-md bg-gray-50"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address and ZIP code</label>
              <div className="h-10 border border-gray-300 rounded-md bg-gray-50"></div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Designee's fax number (include area code)
              </label>
              <div className="h-10 border border-gray-300 rounded-md bg-gray-50"></div>
            </div>
          </div>
        </div>

        {/* Signature Section */}
        <div className="border-t border-gray-300 pt-4">
          <p className="text-xs italic mb-4">
            Under penalties of perjury, I declare that I have examined this application, and to the best of my knowledge
            and belief, it is true, correct, and complete.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name and title (type or print clearly)
              </label>
              <div className="h-10 border border-gray-300 rounded-md bg-gray-50"></div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Applicant's telephone number (include area code)
              </label>
              <div className="h-10 border border-gray-300 rounded-md bg-gray-50"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Signature</label>
              <div className="h-10 border border-gray-300 rounded-md bg-gray-50"></div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <div className="h-10 border border-gray-300 rounded-md bg-gray-50"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Footer */}
      <div className="p-4 bg-gray-100 border-t border-gray-300 text-xs text-gray-500">
        <p>For Privacy Act and Paperwork Reduction Act Notice, see separate instructions.</p>
        <p>Cat. No. 16055N</p>
        <p>Form SS-4 (Rev. 12-2023)</p>
      </div>
    </div>
  )
}
