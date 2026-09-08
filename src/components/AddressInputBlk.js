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
            <div className={`row ${className}`}>
                <div className="col-6 col-md-3">
                    <select
                        className="form-select px-1 border-gray-400 w-100 h-5"
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
                <div className="col-6 col-md-3">
                    <select
                        className="form-select px-1 border-gray-400 w-100 h-5"
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
                    <div className="col-12 col-md-6 mt-2 mt-md-0">
                        <input
                            className={`ipt d-block px-1 rounded fz-16px`}
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
