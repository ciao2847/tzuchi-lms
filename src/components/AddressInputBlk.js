import React, { useState, useEffect, forwardRef } from 'react'
import { useTwZipCode, cities, districts } from 'use-tw-zipcode'
// eslint-disable-next-line react/display-name
const AddressInputBlk = forwardRef(
    ({ onChange, noAddress, className }, ref) => {
        const {
            city,
            district,
            zipCode: zipcode,
            handleCityChange,
            handleDistrictChange
        } = useTwZipCode()
        const [address, setAddress] = useState('')
        useEffect(() => {
            if (!city || !district || !zipcode || (!address && !noAddress)) {
                onChange(null)
            } else {
                onChange({ city, district, zipcode, address })
            }
        }, [city, district, zipcode, address])
        return (
            <div className={`grid grid-cols-12 gap-2 ${className || ''}`}>
                <div className="col-span-6 md:col-span-3">
                    <select
                        className="form-select px-1 border border-gray-400 rounded w-full h-5"
                        value={city}
                        onChange={(e) => {
                            handleCityChange(e.target.value)
                        }}
                        id="city"
                    >
                        {cities.map((city, i) => {
                            return <option key={i}>{city}</option>
                        })}
                    </select>
                </div>
                <div className="col-span-6 md:col-span-3">
                    <select
                        className="form-select px-1 border border-gray-400 rounded w-full h-5"
                        value={district}
                        onChange={(e) => {
                            handleDistrictChange(e.target.value)
                        }}
                        id="district"
                    >
                        {districts[city].map((district, i) => {
                            return <option key={i}>{district}</option>
                        })}
                    </select>
                </div>
                {!noAddress && (
                    <div className="col-span-12 md:col-span-6">
                        <input
                            className={`ipt block px-1 rounded text-[16px]`}
                            type="text"
                            placeholder={`請輸入地址`}
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                )}
            </div>
        )
    }
)

export default React.memo(AddressInputBlk)
