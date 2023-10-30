function removeSelectedColor() {
            // Get a reference to the select element
            var select = document.getElementById("colorSelect");
            
            // Get the selected index
            var selectedIndex = select.selectedIndex;

            // Check if any option is selected
            if (selectedIndex !== -1) {
                // Remove the selected option
                select.remove(selectedIndex);
            }
        }