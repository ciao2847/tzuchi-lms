import React, { forwardRef } from 'react'
// eslint-disable-next-line react/display-name
const NumericStepper = forwardRef(
    ({ value = '', onChange, max = 10, min = 0, className }, ref) => {
        return (
            <div
                className={`flex border rounded overflow-hidden disable-dbl-tap-zoom ${className}`}
            >
                <button
                    className="btn w-6 h-6 border-0"
                    type="button"
                    onClick={(e) => {
                        onChange(value * 1 - 1)
                    }}
                    disabled={value <= min}
                >
                    <i
                        className="icon icon-minus text-[24px]"
                        aria-hidden="true"
                    ></i>
                    <div className="sr-only">減少</div>
                </button>
                <input
                    type="number"
                    pattern="[0-9]"
                    inputMode="numeric"
                    className="ipt w-8 h-6 px-0 border-t-0 border-b-0 text-center text-[20px] font-bold outline-none"
                    value={value}
                    onChange={(e) => {
                        let v = e.target.value
                        onChange(v)
                    }}
                    onBlur={(e) => {
                        /* let v = e.target.value * 1
                    if (v > max) {
                        v = max
                    }
                    if (v < min) {
                        v = min
                    }
                    onChange(v)
                    e.target.value = v*/
                    }}
                    ref={ref}
                />
                <button
                    className="btn w-6 h-6 border-0"
                    type="button"
                    onClick={() => {
                        if (!value && value != 0) {
                            onChange(min)
                        }
                        onChange(value * 1 + 1)
                    }}
                    disabled={value >= max}
                >
                    <i className="icon icon-add text-[24px]" aria-hidden="true"></i>
                    <div className="sr-only">增加</div>
                </button>
            </div>
        )
    }
)

export default React.memo(NumericStepper)
