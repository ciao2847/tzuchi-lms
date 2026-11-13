import React from 'react'
import I18N from 'components/I18N'

const EmptyState = ({ children = '暫無資料', className = '' }) => (
    <p role="status" className={`py-8 text-center text-[14px] text-[#8292a7] ${className}`}>
        <I18N>{children}</I18N>
    </p>
)

export default EmptyState
