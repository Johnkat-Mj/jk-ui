import { Link } from "@tanstack/react-router";
import { Card } from "../jk/card";
import { Icon } from "../jk/icon";
import {
	Table,
	TableCell,
	TableColumn,
	TableColumns,
	TableRow,
	TableRows,
} from "../jk/table";
import { courses_list } from "../data/courses";
import { Menu, MenuContent, MenuIcon, MenuItem, MenuLabel, MenuSeparator } from "../jk/menu";
import { Button } from "../jk/button";

export const AllCourses = () => {
	return (
		<Card className="[--card-padding:0px]">
			<div className="flex items-center justify-between p-4 h-max">
				<span className="font-semibold text-fg-title">All Courses </span>
				<div className="flex">
					<Link
						to="/"
						className="btn btn-ghost btn-ghost-gray h-7.5 ring ring-border-input rounded-ui pl-2.5 pr-2"
					>
						View All
						<Icon name="hugeicons--arrow-right-01" size="xs" className="ml-1" />
					</Link>
				</div>
			</div>
			<Table className="[--gutter-x:--spacing(4)]">
				<TableColumns className={"border-t"} fillGray>
					<TableColumn isRowHeader># Course name</TableColumn>
					<TableColumn>Category</TableColumn>
					<TableColumn>last edited</TableColumn>
					<TableColumn>Price</TableColumn>
					<TableColumn align="right">Orders</TableColumn>
					<TableColumn align="right">Actions</TableColumn>
				</TableColumns>
				<TableRows items={courses_list}>
					{(item) => (
						<TableRow key={item.id}>
							<TableCell>
								<div className="flex items-center">
									<div
										className={`mr-2 flex size-7.5 p-1 rounded-ui ${item.logo_color}`}
									>
										<img
											src={item.logo}
											alt={item.name}
											width={50}
											height={50}
											className="size-full"
										/>
									</div>
									<div className="font-medium text-fg-title min-w-50">
										{item.name}
									</div>
								</div>
							</TableCell>
							<TableCell>{item.category}</TableCell>
							<TableCell>{item.last_edited}</TableCell>
							<TableCell>${item.price}</TableCell>
							<TableCell align="right">{item.orders}</TableCell>
							<TableCell align="right">
								<Menu>
									<Button size="sm" iconOnly variant="ghost" className="ml-auto">
										<Icon name="" className=" hugeicons--more-horizontal" />
									</Button>
									<MenuContent popover={{placement:"left"}}>
										<MenuItem>
											<MenuIcon>
												<Icon size="xs" name="hugeicons--edit-02" />
											</MenuIcon>
											<MenuLabel>
												Edit
											</MenuLabel>
										</MenuItem>
										<MenuItem>
											<MenuIcon>
												<Icon size="xs" name="hugeicons--eye" />
											</MenuIcon>
											<MenuLabel>
												View
											</MenuLabel>
										</MenuItem>
										<MenuSeparator />
										<MenuItem intent="danger">
											<MenuIcon>
												<Icon size="xs" name="hugeicons--delete-02" className="text-danger iconify" />
											</MenuIcon>
											<MenuLabel>
												Delete
											</MenuLabel>
										</MenuItem>
									</MenuContent>
								</Menu>
							</TableCell>
						</TableRow>
					)}
				</TableRows>
			</Table>
		</Card>
	);
};
