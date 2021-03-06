import {Button, Input, Loading} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {System, tabSystems} from "../../models/system";
import {Tabs} from "components";

export interface Props {
  searchSystem: System;
  isSearching: boolean;
  searchTerm: string;
  onSystemChange: (searchSystem: System) => void;
  onSearchInput: (search: string) => void;
  onSearchClick: () => void;
  onClearClick: () => void;
}

export default function DashboardToolbar({
  searchSystem,
  isSearching,
  searchTerm,
  onSystemChange,
  onSearchInput,
  onSearchClick,
  onClearClick,
}: Props) {



  const buttonSearchSystemClick = (searchSystem: System) => {
    onSystemChange(searchSystem);
  };

  return (
    <>
      <Tabs
        values={tabSystems}
        activeValue={searchSystem}
        onTabClick={(value) => buttonSearchSystemClick(value as System)}
      />
      <Input
        clearable
        value={searchTerm}
        placeholder="Suchen..."
        contentRight={
          isSearching ? (
            <Button auto disabled>
              <Loading type="spinner" size="sm" color="primary" />
            </Button>
          ) : (
            <Button auto onClick={() => onSearchClick()}>
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          )
        }
        onChange={(e) => onSearchInput(e.target.value)}
        onClearClick={() => onClearClick()}
      />
    </>
  );
}
