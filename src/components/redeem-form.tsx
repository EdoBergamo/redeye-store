import { Button } from "./ui/button"
import { Input } from "./ui/input"

export const RedeemForm = () => {
  return (
    <div className="text-white flex items-center justify-center flex-col">
      <h1 className="text-4xl font-bold mb-6">Redeem your Product</h1>
      <form className="space-y-4">
        <div className="flex flex-col">
          <label className="mb-2 text-lg" htmlFor="product-key">
            Product Key
          </label>
          <Input className="w-96" id="product-key" placeholder="Enter your product key" />
        </div>
        <Button className="w-96">Redeem</Button>
      </form>
    </div>
  )
}