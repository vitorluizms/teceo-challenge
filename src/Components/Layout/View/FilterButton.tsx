import { FunnelIcon } from '@heroicons/react/24/outline'
import { Button } from 'antd'

function FilterButton({ onClick }: { onClick?: () => void }) {
  return (
    <Button
      icon={<FunnelIcon style={{ width: '14px', color: '#434343' }} />}
      size="large"
      className="flex items-center justify-center text-[16px] font-normal"
      htmlType="button"
      onClick={onClick}
    />
  )
}

export default FilterButton
