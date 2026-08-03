import { Card, CardBody } from "@/components/jk/card"
import { Button } from "@/components/jk/button"

export const ProductCard = () => {
  return (
    <Card fill="gray" size="custom" className="[--card-padding:--spacing(1)] space-y-3 w-full max-w-xs">
      {/* Badge Section */}
      <div className="px-4 pt-2">
        <span className="text-fg-subtitle text-sm">
          Top Seller
        </span>
      </div>
      {/* Product Image */}
      <img
        src="/images/sports-shoe.webp"
        alt="Sport Shoe"
        width={1500} height={1020}
        className="w-full h-auto rounded-md object-cover"
      />

      <CardBody gap="2" className="px-4 pb-2 text-sm">
        <div className="flex justify-between items-start gap-2">
          <span className="flex-1 text-fg-title font-medium">Air Nike</span>
          <span className="text-fg-subtitle">$12</span>
        </div>
        <div className="flex justify-between items-start gap-2">
          <span className="flex-1 text-muted-foreground text-xs">Colored</span>
          <Button size="xs" intent="neutral">
            Add to cart
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}
